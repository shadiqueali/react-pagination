const paginate = (followeres) => {
    const itemsPerPage = 9
    const page = Math.ceil(followeres.length/itemsPerPage)
    const newFolloweres = Array.from({length:page},(_,index)=>{
        const start = index * itemsPerPage
        return followeres.slice(start,start + itemsPerPage)
    })
    return newFolloweres
}

export default paginate
