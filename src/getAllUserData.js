// const randomDatas =[]
// const count=5

//     const createDatas=async ()=>{
//         const mapArray =[]
//         for (let i=0;i<count;i++){
//             mapArray.push(i)
//         }
//         console.log(mapArray)
//         const promises = mapArray.map(()=>{return axios('https://randomuser.me/api/')})

//         const rawDatas=await Promise.all(promises)

//         for (let i=0;i<count;i++){
//             const randomData = {
//                 name:rawDatas[i].data.results[0].name.first+" "+rawDatas[i].data.results[0].name.last,
//                 country:rawDatas[i].data.results[0].location.country,
//                 imageUrl:rawDatas[i].data.results[0].picture.large
//             }
//             randomDatas.push(randomData)
//         }

//         console.log(randomDatas)

//     }
// (async()=>await createDatas())()