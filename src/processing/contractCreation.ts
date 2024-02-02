import { Contract } from "../model";

export function upsertContract(contracts: Contract[], contract: Contract) {
  const existingIndex = contracts.findIndex((c) => c.id === contract.id);

  if (existingIndex > -1) {
    contracts[existingIndex] = contract;
  } else {
    contracts.push(contract);
  }
}

export function synchronizeContracts(
  createdContracts: Contract[],
  destroyedContracts: Contract[]
) {
  // Filter out destroyed contracts that have a destroy timestamp before the create timestamp of the same contract
  const validDestroyedContracts = destroyedContracts.filter(
    (destroyedContract) => {
      const correspondingCreatedContract = createdContracts.find(
        (c) => c.id === destroyedContract.id
      );
      // If there's no corresponding create entry, keep the destroy entry
      if (!correspondingCreatedContract) return true;

      if (
        !destroyedContract.destroyTimestamp ||
        !correspondingCreatedContract.createTimestamp
      ) {
        throw new Error(
          "Missing timestamp: cannot determine chronological order without both create and destroy timestamps."
        );
      }
      // Check timestamps to decide if the destroy entry should be kept
      return (
        new Date(destroyedContract.destroyTimestamp) >
        new Date(correspondingCreatedContract.createTimestamp)
      );
    }
  );

  destroyedContracts.length = 0;
  validDestroyedContracts.forEach((contract) =>
    destroyedContracts.push(contract)
  );
}
