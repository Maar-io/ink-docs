import React from 'react'
import { BigCTA } from '../BigCTA'
import { PillList } from '../PillList'
import { ScrollPlayer } from '../ScrollPlayer'
import BlueChip from '../../../static/animations/ecosystem-blue-chip.json'
import Canary from '../../../static/animations/ecosystem-canary.json'
import Infrastructure from '../../../static/animations/ecosystem-infra.json'
import { Config } from './config'

const BLUE_CHIP_EXAMPLES = [
  { icon: '/img/DEX.svg', title: 'DEX' },
  { icon: '/img/lending.svg', title: 'Lending Platform' },
  { icon: '/img/NFT.svg', title: 'NFT Marketplace' },
  { icon: '/img/multi-sig.svg', title: 'Multi-Sig Digital Vault' },
  { icon: '/img/idea.svg', title: 'Your Awesome New Idea' },
]

const CANARY_SHOWCASE_EXAMPLES = [
  { icon: '/img/DEX.svg', title: 'A Game' },
  { icon: '/img/lending.svg', title: 'A Crowdload Platform' },
  { icon: '/img/NFT.svg', title: 'An Innovative Digital Collectible' },
  { icon: '/img/idea.svg', title: 'Your Awesome New Idea' },
]

const INFRASTRUCTURE_EXAMPLES = [
  { icon: '/img/library.svg', title: 'Libraries' },
  { icon: '/img/code.svg', title: 'Improved IDE tooling' },
  { icon: '/img/analysis.svg', title: 'Static Analysis' },
  { icon: '/img/on-chain-contract.svg', title: 'On-Chain Contract Verification' },
  { icon: '/img/idea.svg', title: 'Your Awesome New Idea' },
]

export const EcosystemGrants: React.FC = () => {
  return (
    <section className="md:mt-28 mt-16">
      <div className="px-4">
        <div className="max-w-biggest mx-auto">
          <div className="text-center">
            <h3 className="text-base uppercase font-bold font-montserrat w-full">Track 3</h3>
            <h2 className="text-5xl font-semibold font-montserrat w-full text-brand-500">
              <i className="font-bold text-black dark:text-white">Ecosystem</i> Grants
            </h2>
            <h3 className="p-0 m-0 mt-8 mx-auto max-w-3xl text-3xl dark:text-white/70 text-black/70">
              Ecosystem Grants are available for ink! projects that fall into one of the following categories:
            </h3>
          </div>

          <div className="max-w-biggest">
            <div className="flex flex-col md:flex-row items-start justify-between lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={BlueChip} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 1</h3>
                <h2 className="text-4xl opacity-90 font-semibold font-montserrat w-full">Blue Chip Dapps</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  For veteran smart contract developers who want to create production-grade Dapps displaying all that
                  ink! has to offer.
                </p>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  Blue chip Dapps will consist of multiple contracts, polished front end designs and user experiences,
                  and innovative solutions to model best-in-class code standards that the community can learn from.
                </p>

                <PillList pills={BLUE_CHIP_EXAMPLES} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={Canary} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 2</h3>
                <h2 className="text-4xl opacity-90 font-semibold font-montserrat w-full">Canary Showcase</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  Grants are available for new and experienced smart contract developers that want to create smaller
                  production-grade full stack Dapps.
                </p>

                <PillList pills={CANARY_SHOWCASE_EXAMPLES} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={Infrastructure} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 3</h3>
                <h2 className="text-5xl opacity-90 font-semibold font-montserrat w-full">Infrastructure</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  If you love to build tools people will love, then Infrastructure Grants are for you. Pitch us your
                  idea!
                </p>

                <PillList pills={INFRASTRUCTURE_EXAMPLES} />
              </div>
            </div>
          </div>

          <BigCTA
            className="min-h-[300px] lg:mt-32 md:mt-16 mt-12"
            title="Interested?"
            emphasized="Apply"
            cta="for an Ecosystem Grant"
            url={Config.grantsApplicationURL}
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  )
}
