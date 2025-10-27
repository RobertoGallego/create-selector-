import React from 'react'

import { FormOnChange, Loader, Select } from '@procsea/design-system'

import useSellerFishingMethods from './useSellerFishingMethods'

export interface FishingMethodSelectorProps {
  'data-e2e'?: string
  errorMessage?: string
  fluid?: boolean
  name?: string
  onChange?: FormOnChange<Id | null>
  productId?: Id
  required?: boolean
  value?: Id | null
  warningMessage?: string
}
const FishingMethodSelector = ({
  'data-e2e': dataE2e = 'select-fishing-method',
  errorMessage,
  fluid,
  name,
  onChange,
  productId,
  required = false,
  value,
  warningMessage,
}: FishingMethodSelectorProps) => {
  const { fishingMethodOptions = [], isInitialLoading } = useSellerFishingMethods({ productId })

  if (isInitialLoading) {
    return <Loader size="35px" data-e2e="select-fishing-method-loader" />
  }

  return (
    <Select<Id, false>
      clearable
      data-e2e={dataE2e}
      disabled={!fishingMethodOptions || fishingMethodOptions.length === 0}
      errorMessage={errorMessage}
      fluid={fluid}
      label={gettext('Fishing Method')}
      name={name}
      onChange={onChange}
      options={fishingMethodOptions}
      placeholder={gettext('Add a fishing method')}
      required={required}
      searchable
      value={value}
      warningMessage={warningMessage}
    />
  )
}

export default FishingMethodSelector
