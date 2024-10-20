'server-only';

export async function getAdvantages(){
    const advantages:{
        id:number;
        img: string;
        title: string;
        description: string;
    }[] = [];
    
    let response = await fetch('https://xcta-strapi-do-7jsnm.ondigitalocean.app/api/advantages?populate=*', {
        method: 'GET',
        headers: 
        {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${process.env.TOKEN}`,
         'Accept': 'application/json'
        }
    })

    const allData = (await response.json())['data'];

    if(response.status != 200 || allData.length <= 0)
        return advantages;

    allData.forEach((data:any)=>{
        advantages.push({
            id: data.id,
            img: data.image.url,
            title: data.title,
            description: data.description
        });
    });

    return advantages;

}