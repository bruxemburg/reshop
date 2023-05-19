import { useGraphQL } from '~/composables/graphql'

export interface Entity {
  id: number
  date_created: string
  date_updated: string
}

export interface Product extends Entity {
  name: string
  price: number
  description: string
  category: Category

  /** Used to calculate total reviews for product */
  reviews_aggregate: { aggregate: { count: number } }

  /** products images */
  products_files: Array<{ directus_file: Image }>
  thumbnail: string
}

export interface Category extends Entity {
  name: string
}

interface Image {
  id: string
  filename_download: string
  description: string
}

export async function fetchProductById(id: string) {
  const { products_by_pk: product } = await useGraphQL<{
    products_by_pk: Product | null
  }>(
    `
    query getProductById($id: Int!) {
      products_by_pk(id: $id) {
        id,
        name,
        price,
        description,
        date_created,
        date_updated,
        category {
          id,
          name,
          date_created,
          date_updated
        },
        reviews_aggregate {
          aggregate {
            count
          }
        },
        products_files {
          directus_file {
            id,
            description,
            filename_download
          }
        },
        thumbnail
      }
    }
  `,
    {
      id
    }
  )

  return product
}

export async function fetchProducts(limit: number, offset: number) {
  const { products } = await useGraphQL<{ products: Product[] }>(
    `
    query getProducts($limit: Int!, $offset: Int!) {
      products(limit: $limit, offset: $offset) {
        id,
        name,
        price,
        description,
        date_created,
        date_updated,
        category {
          id,
          name,
          date_created,
          date_updated
        },
        reviews_aggregate {
          aggregate {
            count
          }
        },
        products_files {
          directus_file {
            id,
            description,
            filename_download
          }
        },
        thumbnail
      }
    }
  `,
    {
      limit,
      offset
    }
  )

  return products
}

export async function fetchProductsCount() {
  const { products_aggregate } = await useGraphQL<{
    products_aggregate: { aggregate: { count: number } }
  }>(
    `
    query getProductsNumber {
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  `
  )

  return products_aggregate.aggregate.count
}
