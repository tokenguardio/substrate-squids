const BLOCK_TIME_SEC = parseInt(process.env.BLOCK_TIME_SEC || "1");
const FORCE_FLUSH_WINDOW_DAYS = parseInt(
  process.env.FORCE_FLUSH_WINDOW_DAYS || "7"
);
const PARTITION_SIZE_HOURS = parseInt(process.env.PARTITION_SIZE_HOURS || "12");

export function shouldForceFlush(blockCount: number): boolean {
  const blockTimeHours = (BLOCK_TIME_SEC * blockCount) / 3600;
  return blockTimeHours >= PARTITION_SIZE_HOURS;
}

export function isInFlushWindow(lastBlockTimestamp: number): boolean {
  const currentDate = Date.now();
  const timeDifferenceDays =
    (currentDate - lastBlockTimestamp) / (1000 * 3600 * 24);
  return timeDifferenceDays <= FORCE_FLUSH_WINDOW_DAYS;
}
