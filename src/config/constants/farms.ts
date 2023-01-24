import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'PATC',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x46777d443A2e41091fCC5e305D7caf64BBa455Aa',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PATC-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xD87b639850FC88b6F616a6CDBcDaFD345022CE6E',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x64edC2C7882FFa5B2b94d666e24f3b8613669ED8',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
]

export default farms
