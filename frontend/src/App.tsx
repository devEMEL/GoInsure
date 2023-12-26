import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { DaffiWalletConnect } from '@daffiwallet/connect'
import { PeraWalletConnect } from '@perawallet/connect'
import { PROVIDER_ID, ProvidersArray, WalletProvider, useInitializeProviders } from '@txnlab/use-wallet'
import algosdk from 'algosdk'
import { SnackbarProvider } from 'notistack'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import { getAlgodConfigFromViteEnvironment } from './utils/network/getAlgoClientConfigs'


let providersArray: ProvidersArray
providersArray = [
  { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
  { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
  { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
  { id: PROVIDER_ID.EXODUS },
]


export default function App() {
  const algodConfig = getAlgodConfigFromViteEnvironment()

  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: algodConfig.network,
      nodeServer: algodConfig.server,
      nodePort: String(algodConfig.port),
      nodeToken: String(algodConfig.token),
    },
    algosdkStatic: algosdk,
  })

  return (


    <SnackbarProvider maxSnack={3}>
      <WalletProvider value={walletProviders}>

        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/list-project" element={<ListToken />} /> */}
      </Routes>
      </WalletProvider>
    </SnackbarProvider> 
  )
}
