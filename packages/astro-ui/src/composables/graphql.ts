import { z } from 'zod'

export interface RawGraphQLData {
  [key: string]: any
  [index: number]: never
}

export interface UseGraphQLParams {
  headers: HeadersInit
  url: string | URL
}

const schema = z.object({
  data: z.any(),
  errors: z
    .array(
      z.object({
        message: z.string()
      })
    )
    .optional()
})

/**
 * Wrapper to execute GraphQL queries with ease
 *
 * *Should be available on both server and client*
 * @param query The valid GraphQL query string
 * @param variables Variables needed for GraphQL query
 * @param params Optional parameters and overrides for query execution
 * @returns queried data, otherwise throws `Error`
 */
export function useGraphQL<T extends RawGraphQLData>(query: string): Promise<T>
export function useGraphQL<T extends RawGraphQLData>(
  query: string,
  variables: Record<string, unknown>
): Promise<T>
export function useGraphQL<T extends RawGraphQLData>(
  query: string,
  variables?: Record<string, unknown>,
  params?: Partial<UseGraphQLParams>
): Promise<T>

export async function useGraphQL<T extends RawGraphQLData>(
  query: string,
  variables?: Record<string, unknown>,
  params?: Partial<UseGraphQLParams>
) {
  const url = params?.url ?? import.meta.env.PUBLIC_GRAPHQL_ENDPOINT

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Role': 'public',
      ...params?.headers
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`)

  const json = await response.json()
  const { data, errors } = schema.parse(json)

  if (errors) {
    throw new Error(errors.map((e) => e.message).join('\n'))
  }

  return data as T
}
