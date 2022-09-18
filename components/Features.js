import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Easy to use',
    description:
      'Extremely easy to use. Just need to fill in the model name and enter the dataset. Our app will manage the rest. ',
    icon: GlobeAltIcon,
  },
  {
    name: 'Completely free',
    description:
      'It is completely free to use at the moment. Train and build no-code ML models free of cost. ',
    icon: ScaleIcon,
  },
  {
    name: 'Works super fast',
    description:
      'The results of the application are instant, like you are writing the code yourself, with the comfort of the UI. ',
    icon: BoltIcon,
  },
  {
    name: 'Provides back metrics',
    description:
      'Gives back the requested metric to the user, for further investigation. ',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-12" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-blue-600">Development</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to build ML models
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Make your no-code ML model today!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
