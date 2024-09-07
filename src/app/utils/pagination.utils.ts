export function PaginationSolver(page:number = 1, limit:number = 10)
{
    if (!page || page <= 1)
        page = 0;
    else
        page = page - 1;

    if (!limit || limit <= 10 ) limit = 10;

    const skip = page * limit;
    return { page, skip, limit };
}

export function PaginationGenerator(page:number = 0, limit:number = 0, count:number = 0)
{
    return {
        totalCount:count,
        page:page,
        countPerPage:limit,
        pageCount:Math.ceil(count / limit),
    };
}