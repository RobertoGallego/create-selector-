import { QueryClient } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { MyOptionType } from '@procsea/design-system'

import * as fishingMethodsQueries from 'src/queries/shared/fishingMethods/fishingMethods'
import { MOCK_STORE_FISHING_METHOD, MOCK_STORE_FISHING_METHODS, render, screen } from 'src/testing'
import { getNewEntitiesOptions } from 'src/utils'

import FishingMethodSelector from './FishingMethodSelector'

const getSelectByTestId = (testId: string) =>
  screen.getByTestId(testId).querySelector('.Select__control') as HTMLElement

const getSelectClearIndicatorByTestId = (testId: string) =>
  screen.getByTestId(testId).querySelector('.Select__clear-indicator') as HTMLElement

describe('<FishingMethodSelector />', () => {
  const productId = 242424

  const fishingMethodOptions: MyOptionType<Id>[] = getNewEntitiesOptions(MOCK_STORE_FISHING_METHODS)

  beforeEach(() => {
    jest.spyOn(fishingMethodsQueries, 'useFishingMethodsQuery').mockReturnValue({
      data: fishingMethodOptions,
      isInitialLoading: false,
    } as any)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should set passed value on init', () => {
    const view = render(
      <FishingMethodSelector value={MOCK_STORE_FISHING_METHOD.id} productId={productId} />
    )

    expect(view.getByTestId('select-fishing-method')).toHaveTextContent(
      MOCK_STORE_FISHING_METHOD.name
    )
  })

  it('should send an "onChange" event with the selected fishing method, when user checks a fishing method', () => {
    const onChange = jest.fn()

    const view = render(<FishingMethodSelector onChange={onChange} productId={productId} />)

    userEvent.click(getSelectByTestId('select-fishing-method'))
    userEvent.click(view.getByText(MOCK_STORE_FISHING_METHOD.name))

    expect(onChange).toHaveBeenCalledWith({ value: MOCK_STORE_FISHING_METHOD.id })
  })

  it('should be able to deselect a fishing method', () => {
    const value: Id = MOCK_STORE_FISHING_METHOD.id
    const onChange = jest.fn()

    render(<FishingMethodSelector onChange={onChange} value={value} productId={productId} />)

    userEvent.click(getSelectClearIndicatorByTestId('select-fishing-method'))

    expect(onChange).toHaveBeenCalledWith({ value: null })
  })

  it('should display a loader if isInitialLoading is equals to true', () => {
    jest
      .spyOn(fishingMethodsQueries, 'useFishingMethodsQuery')
      .mockReturnValue({ data: [], isInitialLoading: true } as any)

    const view = render(<FishingMethodSelector />, { queryClient: new QueryClient() })

    expect(view.getByTestId('select-fishing-method-loader')).toBeInTheDocument()
    expect(view.queryByTestId('select-fishing-method')).not.toBeInTheDocument()
  })
})
