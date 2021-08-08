const Pagination = ({ currentPage, totalPosts, postsPerPage, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const renderPagination = pageNumbers.map((number) => {
        return (
            <div
                key={number}
                className="item"
                onClick={() => paginate(number)}>
                {number}
            </div>
        )
    })

    return (
        <div className="ui pagination menu">
            {renderPagination}
        </div>
    )
}

export default Pagination