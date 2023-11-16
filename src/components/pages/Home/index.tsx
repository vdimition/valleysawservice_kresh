import React, { type FC } from 'react'
import { BusinessPickUp } from './BusinessPickUp'
import { SawSharpening } from './SawSharpening'
import { CommittedToQuality } from './CommittedToQuality'
import { Reviews } from './Reviews'
import { Map } from './Map'

export const Home: FC = () => (
    <div>
        <BusinessPickUp />
        <SawSharpening />
        <CommittedToQuality />
        <Reviews />
        <Map />
    </div>
)
