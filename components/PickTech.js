const products = [
    {
      id: 1,
      name: 'Scikit-Learn',
      href: '/sklearnmodel',
      price: '$48',
      imageSrc: 'https://analyticsdrift.com/wp-content/uploads/2021/04/Scikit-learn-free-course.jpg',
      imageAlt: 'Scikit-Learn Logo.',
    },
    {
      id: 2,
      name: 'TensorFlow',
      href: '/comingsoon',
      price: '$35',
      imageSrc: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-ar21.png',
      imageAlt: 'TensorFlow logo',
    }
    // More products...
  ]
  
  export default function PickTech() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:text-center pb-16">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl text-blue-600">
            Select a Framework
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Pick a framework to use to train your no-code ML model. 
          </p>
        </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-36">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-12 xl:aspect-h-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
