import product1 from '../images/lighgroast.jpg'
import product2 from '../images/medium.jpg'
import product3 from '../images/mediumroast.jpg'
import product4 from '../images/darkroast.jpg'



const products = [
  {
    id: 1,
    name: 'BRAZIL - Gesha - Fazendas Dutra, Jatobá 16+',
    roast: 'Light',
    href: '#',
    price: '345,-',
    imageSrc: product1,
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Guatemala robusta',
    roast: 'Medium',
    href: '#',
    price: '345,-',
    imageSrc: product2,
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Dominican Republic washed Jarabacoa',
    roast: 'Dark',

    href: '#',
    price: '345,-',
    imageSrc: product3,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Brazil Cerrado dulce PREMIUM',
    roast: 'Extra Dark',

    href: '#',
    price: '430,-',
    imageSrc: product4,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

export default function Products() {
    return (
        <div href="Products" className=" pt-2 bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-square	 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="font-montserrat mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className=" font-montserratt text-xs text-gray-400">{product.roast}</p>

                  <p className="font-montserrat mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
}
