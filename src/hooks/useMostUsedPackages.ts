import useSWR from 'swr'
import { useMemo } from 'react'

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())

export const useMostUsedPackages = (): [Record<string, number>, boolean, any] => {
  const { data, error } = useSWR('https://list-used-packages.limpix.workers.dev', fetcher)
  const isLoading = useMemo(() => !!data, [data])

  return [data as Record<string, number>, isLoading, error]
}
