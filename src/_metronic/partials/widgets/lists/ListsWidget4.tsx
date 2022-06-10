/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {chartOptions} from '../mixed/MixedWidget10'
import ApexCharts from 'apexcharts'

type Props = {
  className: string
  items?: number
  chartColor: string
  chartHeight: string
}

const ListsWidget4: React.FC<Props> = ({className, items = 6, chartColor, chartHeight}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight))
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])
  return (
    <div className='card card-xl-stretch mb-xl-8 bg-dark'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder text-white'>Political Trends</span>
          <span className='text-secondary mt-1 fw-bold fs-7'>Latest trends</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5 d-flex flex-column'>
        {/* begin::Chart */}
        <div ref={chartRef} className='mixed-widget-7-chart card-rounded-bottom mb-7'></div>
        {/* end::Chart */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='bg-gray-800 d-flex w-50px h-50px symbol'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-muted text-hover-primary fs-6 fw-bolder'>
                Top Authors
              </a>
              <span className='text-gray-800 fw-bold d-block fs-7'>Mark, Rowling, Esther</span>
            </div>
            <span className='badge  bg-gray-800 fw-bolder my-2 pt-2 pb-2'>+82$</span>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='bg-gray-800 d-flex w-50px h-50px symbol'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-muted text-hover-primary fs-6 fw-bolder'>
                Popular Authors
              </a>
              <span className='text-gray-800 fw-bold d-block fs-7'>Randy, Steve, Mike</span>
            </div>
            <span className='badge bg-gray-800 fw-bolder my-2 pt-2 pb-2'>+280$</span>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='bg-gray-800 d-flex w-50px h-50px symbol'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/vimeo.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='flex-grow-1 me-2'>
              <a href='#' className='text-muted text-hover-primary fs-6 fw-bolder'>
                New Users
              </a>
              <span className='text-gray-800 fw-bold d-block fs-7'>John, Pat, Jimmy</span>
            </div>
            <span className='badge bg-gray-800 fw-bolder my-2  pt-2 pb-2'>+4500$</span>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {items > 3 && (
          <div className='d-flex align-items-sm-center mb-7'>
            {/* begin::Symbol */}
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/bebo.svg')}
                  className='h-50 align-self-center'
                  alt=''
                />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Section */}
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                  Active Customers
                </a>
                <span className='text-muted fw-bold d-block fs-7'>Mark, Rowling, Esther</span>
              </div>
              <span className='badge badge-light fw-bolder my-2'>+4500$</span>
            </div>
            {/* end::Section */}
          </div>
        )}
        ;
        {items > 4 && (
          <div className='d-flex align-items-sm-center mb-7'>
            {/* begin::Symbol */}
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/kickstarter.svg')}
                  className='h-50 align-self-center'
                  alt=''
                />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Section */}
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                  Bestseller Theme
                </a>
                <span className='text-muted fw-bold d-block fs-7'>Disco, Retro, Sports</span>
              </div>
              <span className='badge badge-light fw-bolder my-2'>+4500$</span>
            </div>
            {/* end::Section */}
          </div>
        )}
        {items > 5 && (
          <div className='d-flex align-items-sm-center'>
            {/* begin::Symbol */}
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/fox-hub.svg')}
                  className='h-50 align-self-center'
                  alt=''
                />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Section */}
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder'>
                  Fox Broker App
                </a>
                <span className='text-muted fw-bold d-block fs-7'>Finance, Corporate, Apps</span>
              </div>
              <span className='badge badge-light fw-bolder my-2'>+4500$</span>
            </div>
            {/* end::Section */}
          </div>
        )}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget4}
