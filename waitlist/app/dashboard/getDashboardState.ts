import { DashboardState } from "./dashboardState"

export function getDashboardState(data: {
  contextCompleted: boolean
  scanInProgress: boolean
  threads: { isRisky: boolean }[]
}): DashboardState {
  if (!data.contextCompleted) {
    return DashboardState.CONTEXT_REQUIRED
  }

  if (data.scanInProgress) {
    return DashboardState.SCANNING
  }

  if (data.threads.length === 0) {
    return DashboardState.NO_THREADS
  }

  if (data.threads.every(thread => thread.isRisky)) {
    return DashboardState.THREADS_RISKY_ONLY
  }

  return DashboardState.THREADS_AVAILABLE
}
