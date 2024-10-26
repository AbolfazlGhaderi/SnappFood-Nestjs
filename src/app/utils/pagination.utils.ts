export function paginationSolver(page:number = 1, limit:number = 5)
{
    if (!page || page <= 1)
        page = 0;
    else
        page = page - 1;

    if (!limit || limit <= 5 ) limit = 5;

    const skip = page * limit;
    return { page: page + 1, skip, limit };
}

export function paginationGenerator(page:number = 0, limit:number = 0, count:number = 0)
{
    return {
        totalCount: count,
        page: page,
        countPerPage: limit,
        pageCount: Math.ceil(count / limit),
    };
}