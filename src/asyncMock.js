const products = [
    { id: '1', name: 'Buzo Buenos Ayres', price: 15000, category: 'buzo', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/bec9fba2-262c-4576-b7d7-9b6607e8f738-43fd469c5099f98cf416515915316087-480-0.jpg',stock: 15, description:'Descripcion de Buzo'},
    { id: '2', name: 'Buzo Random Bordo', price: 17000, category: 'buzo', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/74784546-7ef3-4df6-9f07-79615b5d283f-7d67ccf588131432ce16545515310735-1024-1024.jpg', stock: 16, description:'Descripcion de Buzo Random Bordo'},
    { id: '3', name: 'Buzo Racing Team', price: 16000, category: 'buzo', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/d950535a-fbd1-4548-ba37-88ae7a80b4e3-e74619743967cc459016558206118609-480-0.jpg', stock: 10, description:'Buzo Racing Team'},
    { id: '4', name: 'Pantalon Essential Ice', price: 16000, category: 'pantalones', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/2e5b1770-f3d8-4882-9eef-a3a4876ebb6d-c4358f851930439c8116522850200948-480-0.jpg', stock: 10, description:'Descripcion de Pantalon Essential'},
    { id: '5', name: 'Pantalon Chicago Pink', price: 16000, category: 'pantalones', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/b14c3cef-ddbc-424f-9ebf-0e6073b60994-453b829ea4d8a96d9916515911692800-1024-1024.jpg', stock: 10, description:'Descripcion de Pantalon Chicago'},
    { id: '6', name: 'Jeans KOTK Black', price: 16000, category: 'pantalones', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/ad74e634-86cd-447c-a7ed-e5d88baa224a-bf4285dc54b4c7498016565357777839-1024-1024.jpg', stock: 10, description:'Descripcion de Jeans KOTK Black'},
    { id: '7', name: 'Camisa Not a Brand Blue', price: 16000, category: 'camisas', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/05631146-7212-41c2-92bf-7eb137d1ab74-336ad99548e94bc6da16585900033856-480-0.jpg', stock: 10, description:'Descripcion de Camisa Not a Brand'},
    { id: '8', name: 'Camisa Oversize Scotish', price: 16000, category: 'camisas', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/6b590859-16a5-4d15-81cd-184f86128d0b-37105672671386124416515917977698-480-0.jpg', stock: 10, description:'Descripcion de camisa oversize scotish'},
    { id: '9', name: 'Camisa Not a Brand Mustard', price: 16000, category: 'camisas', img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/b0bb6bd3-962a-493d-af99-aef5fca8a5b9-b69a1edb648c1f894516536120969522-480-0.jpg', stock: 10, description:'Descripcion de camisa Not a Brand Mustard'}
]


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1500)
    })
}