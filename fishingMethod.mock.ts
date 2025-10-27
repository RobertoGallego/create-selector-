import { FishingMethod } from 'src/types/fishingMethod'

export const MOCK_STORE_FISHING_METHOD: FishingMethod = {
  id: 20,
  farming: false,
  name: 'Keepnet',
}
export const MOCK_STORE_FARMED_FISHING_METHOD: FishingMethod = {
  id: 21,
  farming: true,
  name: 'Farmed',
}

export const MOCK_STORE_FISHING_METHODS: FishingMethod[] = [
  MOCK_STORE_FISHING_METHOD,
  MOCK_STORE_FARMED_FISHING_METHOD,
  {
    id: 10,
    farming: false,
    name: 'Seine',
  },
  {
    id: 11,
    farming: false,
    name: 'Trawl',
  },
  {
    id: 12,
    farming: false,
    name: 'Gillnet',
  },
  {
    id: 13,
    farming: false,
    name: 'Surrounding nets',
  },
  {
    id: 14,
    farming: false,
    name: 'Hook and line',
  },
  {
    id: 15,
    farming: false,
    name: 'Dredges',
  },
  {
    id: 16,
    farming: false,
    name: 'Pot / Trap',
  },
  {
    id: 17,
    farming: false,
    name: 'Hand caught',
  },
  {
    id: 18,
    farming: false,
    name: 'Diving',
  },
  {
    id: 19,
    farming: false,
    name: 'Pot',
  },
  {
    id: 22,
    farming: false,
    name: 'Trawl / Gillnet',
  },
  {
    id: 23,
    farming: false,
    name: 'None',
  },
  {
    id: 24,
    farming: false,
    name: 'Almadraba',
  },
]
