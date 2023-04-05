import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '../../index'

const PaginationBootstrap = observer(() => {
    const { device } = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    console.log('page count', pageCount)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination>
            {
                pages.map(page => {
                    console.log(page)
                    return (
                        <Pagination.Item
                            active={device.page === page}
                            onClick={() => device.setPage(page)}>
                            {page}
                        </Pagination.Item>
                    )
                }
                )
            }
        </Pagination>
    )
})

export default PaginationBootstrap