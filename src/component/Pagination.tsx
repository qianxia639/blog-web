import React from 'react'

const Pagination = (props: {page:number,lastPage:number, pageChanged: (page:number) => void}) => {

    const next = () => {
        if (props.page <= props.lastPage) {
          props.pageChanged(props.page + 1)
        }
      }
    
      const prev = () => {
        if(props.page > 1) {
            props.pageChanged(props.page - 1)
        }
      }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={prev} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" onClick={next} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )

}

export default Pagination