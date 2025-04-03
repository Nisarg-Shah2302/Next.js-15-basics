export default async function Product({ params } : { params : { id : string }}) {
    console.log(" Product COMPONENT ")
    const { id } = await params;
    return <h1>Product Component: { id }</h1>;
}