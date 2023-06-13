import React from 'react'
import Seo from '../components/molecules/Seo'
// import FleetBuilderScene from "../components/organisms/fleet-builder/FleetBuilderScene";

const ClientSideOnlyLazyFleetBuilderScene = React.lazy(() =>
    import('../components/organisms/FleetBuilderScene')
)

const FleetBuilderPage = () => {
    const isSSR = typeof window === 'undefined'

    return (
        <>
            <Seo title="Fleet builder"/>
            {!isSSR && (
                <React.Suspense fallback={<div/>}>
                    <ClientSideOnlyLazyFleetBuilderScene/>
                </React.Suspense>
            )}
            {/*<FleetBuilderScene/>*/}
        </>
    )
}

export default FleetBuilderPage
