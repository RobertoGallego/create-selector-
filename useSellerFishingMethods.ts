import { useFishingMethodsQuery } from 'src/queries/shared'
import { getNewEntitiesOptions } from 'src/utils'

export interface UseSellerFishingMethodsArgs {
  productId?: Id
}

const useSellerFishingMethods = ({ productId }: UseSellerFishingMethodsArgs) => {
  const { data: fishingMethodOptions, isInitialLoading } = useFishingMethodsQuery({
    queryParams: { productId, ordering: 'name' },
    queryOptions: {
      enabled: !!productId,
      select: getNewEntitiesOptions,
    },
  })

  return { fishingMethodOptions, isInitialLoading }
}

export default useSellerFishingMethods
