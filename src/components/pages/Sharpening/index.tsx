import React, { type FC } from 'react'

import { Map, Title } from '../../common'
import { TableBlock } from './TableBlock'

import { contactPhone } from '../../../config'

import s from './index.module.scss'

import image1 from '../../../images/117-1920w.webp'
import image2 from '../../../images/119-1920w.webp'
import image3 from '../../../images/125-1920w.webp'
import image4 from '../../../images/137-1920w.webp'
import image5 from '../../../images/133-1920w.webp'
import image6 from '../../../images/131-1920w.webp'
import image7 from '../../../images/127-1920w.webp'
import image8 from '../../../images/135-1920w.webp'
import image9 from '../../../images/123-1920w.webp'
import image10 from '../../../images/033-1920w.webp'
import image11 from '../../../images/035-1920w.webp'
import image12 from '../../../images/037-1920w.webp'
import image13 from '../../../images/039-1920w.webp'
import image14 from '../../../images/041-1920w.webp'
import image15 from '../../../images/043-1920w.webp'
import image16 from '../../../images/901-1920w.webp'
import image17 from '../../../images/902-1920w.webp'
import image18 from '../../../images/903-1920w.webp'

export const Sharpening: FC = () => (
    <>
        <Title title='Sharpening'/>
        <div className={s.wrapper}>
            <div className='container'>
                <div>
                    At <span className={s.bold}>Valley Saw Service in Phoenix, Arizona</span>, we provide <span
                    className={s.bold}>sharpening services for all types of saws and blades</span>
                    . We can also trim, grind, re-tooth, re-tip,
                    or even replace your blades. See below for our pricing on the various sharpening services we offer.
                </div>

                <TableBlock
                    delimiter
                    bgGray
                    title={'CARBIDE BLADE SHARPENING'}
                    subTitle={'(Sharpening includes backoff, balance and straightening if needed)'}
                    subTitle2={'BLADES WITH DIAMETERS OF 20" OR LESS'}
                    table={{
                      th: ['Number of Teeth', 'Cost to Sharpen', 'Number of Teeth', 'Cost to Sharpen'],
                      td: [
                        ['7-1/4 x 24T', '$4.25', '80', '$21.00'],
                        ['8 - 20', '$11.00', '90', '$21.50'],
                        ['24', '$11.50', '96', '$22.00'],
                        ['30', '$12.00', '100', '$23.00'],
                        ['36', '$12.75', '108', '$23.75'],
                        ['40', '$13.25', '110', '$24.25'],
                        ['45', '$13.75', '120', '$25.25'],
                        ['50', '$14.75', '130', '$26.25'],
                        ['55', '$15.75', '150', '$36.75'],
                        ['60', '$15.75', '160', '$40.00'],
                        ['72', '$18.00', '180', '$42.00']
                      ]
                    }}
                />

                <TableBlock
                    title={'CARBIDE BLADE REPAIR'}
                    table={{
                      th: ['Type of Repair', 'Average', 'Large*'],
                      td: [
                        ['Tooth replacement (each)', '$3.00', '$3.50'],
                        ['Shoulders (each)', '$12.60', '$15.75'],
                        ['Complete Re-tip (per tip)', '$2.15-$2.35', '$3.25'],
                        ['Tensioning', '$15.00', '$30.00']
                      ]
                    }}
                    subTitleBottom={'Hammering & tensioning - price per quote *20&quot; diameter and over'}
                    image={image1}
                />

                <TableBlock
                    delimiter
                    bgGray
                    title={'CARBIDE DADO SETS'}
                    subTitle={'Dado Blades - Refer to sharpening prices listed above'}
                    table={{
                      th: ['Type', 'Cost'],
                      td: [
                        ['Chippers - 2 Wing (each)', '$4.00'],
                        ['Chippers - 4,6 & 8 wing (each)', '$8.00'],
                        ['Tooth Replacement (each)', '$4.00'],
                        ['Complete Re-tip (per tip)', '$3.00']
                      ]
                    }}
                    image={image2}
                />

                <TableBlock
                    delimiter
                    title={'COLDSAWS'}
                    subTitle={'Dado Blades - Refer to sharpening prices listed above'}
                    columnTitle={'Cutoff/ Metal Cut'}
                    table={{
                      th: ['Type of repair', 'Cost'],
                      td: [
                        ['Sharpen', '$21.00'],
                        ['Sharpen-heavy grind', '$30.00'],
                        ['Re-tooth', '$40.00']
                      ]
                    }}
                    image={image3}
                    subTitleBottom={'*New Blades available for purchase'}
                />

                <TableBlock
                    delimiter
                    bgGray
                    title={'STEEL CIRCULAR SAWS'}
                    table={{
                      th: ['Size', 'Rips', 'Combination'],
                      td: [
                        ['6" to 9"', '$1.00', '$8.50'],
                        ['10" to 11"', '$4.00', '$10.50'],
                        ['12" to 14"', '$9.00', '$12.75'],
                        ['16" to 18"', '$12.00', '$21.00'],
                        ['20" and over', 'Price per quote', 'Price per quote']
                      ]
                    }}
                    image={image4}
                />

                <TableBlock
                    delimiter
                    title={'ROUTER BITS'}
                    table={{
                      th: ['Stock & Custom Steel', 'Steel', 'Carbide', 'Tantung'],
                      td: [
                        ['Small Trim & Straight Bit', '$3.50', '$4.75', '$5.25'],
                        ['Under 1-1/2" Diameter', '$4.00', '$5.00', '$8.40'],
                        ['1-1/2" to 2" Diameter', '$4.00', '$6.00', '$8.40'],
                        ['Over 2" Diameter', '$10.00', '$12.00', '$15.75']
                      ]
                    }}
                    image={image5}
                    subTitleBottom={'** CNC and other non-standard bits are subject to varying prices.'}
                />

                <TableBlock
                    delimiter
                    bgGray
                    title={'PLANETOR, MULTISPUR AND FORSTNER BITS'}
                    table={{
                      th: ['Size', 'Steel', 'Carbide'],
                      td: [
                        ['2" Diameter and under', '$8.50', '$16.00'],
                        ['Over 2" Diameter', '$10.50', '$17.00']
                      ]
                    }}
                    image={image6}
                />

                <TableBlock
                    delimiter
                    title={'EUROPEAN AND STANDARD BORING BITS, STRAIGHT AND BRAD POINT DRILL BITS'}
                    table={{
                      th: ['Size', 'Steel', 'Carbide'],
                      td: [
                        ['10mm or 1/2" Diameter and under', '$3.00', '$4.00'],
                        ['Over 10mm or 1/2" Diameter', '$4.00', '$8.50']
                      ]
                    }}
                    image={image7}
                />

                <TableBlock
                    delimiter
                    bgGray
                    title={'SHAPER KNIVES AND CUTTERS'}
                    table={{
                      th: ['Stock & Custom', 'Steel', 'Carbide', 'Tantung'],
                      td: [
                        ['Per Wing', '$4.25', '$5.25', '$6.50'],
                        ['Per Wing - Large', '$5.25', '$6.50', '$8.50'],
                        ['Per Wing - Extra Lg', '$6.50', '$7.50', '$10.50'],
                        ['Site & Rail (5 or 6)', 'Per Quote', 'Per Quote', 'Per Quote']
                      ]
                    }}
                    subTitleBottom={'Form grinding and re-tip upon request - price per quote'}
                    subTitleBottom2={'Custom shaper knives and cutters manufactured per instructions- price per quote'}
                    image={image8}
                />

                <TableBlock
                    delimiter
                    title={'CARBIDE INSERTS'}
                    table={{
                      th: ['Size', 'Cost'],
                      td: [
                        ['Small - 20mm to 30mm', '$6.00'],
                        ['Medium - 35mm to 40mm', '$7.00'],
                        ['Large - 45mm to 50mm', '$8.00'],
                        ['Ex Large - 60mm and up', '$12.00']
                      ]
                    }}
                    image={image9}
                />

                <TableBlock
                    delimiter
                    title={'MISCELLANEOUS TOOLS'}
                    table={{
                      th: ['Type', 'Cost', 'Cost'],
                      td: [
                        ['Bandsaw - Weld', '$4.00 carbon', '$8.00 Bi-metal'],
                        ['Chainsaw (off bar)', '$7.00 small', '$20.00 Large'],
                        ['Chisel', '$5.00', ''],
                        ['Counter Bore Bit', '$3.00 steel', '$5.00 carbide'],
                        ['Drill Bit', '$1.00 small', '$2.00 Large'],
                        ['Friction Blade (per inch)', '$2.00', ''],
                        ['Grass Shears', '$5.00', ''],
                        ['Hedge Shears', '$6.00', '$15.00 electric'],
                        ['Hole Saw', '$4.00 Bi-metal', '$10.00 Carbide'],
                        ['Lathe Tools', '$10.00 wood', '$20.00 metal'],
                        ['Lathe Tools (Special Grind)', 'Price per quote', ''],
                        ['Lawnmower Blades (Sharpen and Balance)', '$10.00', ''],
                        ['Masonry Bits', '$6.00', '$10.00 Large'],
                        ['Masonry Bits RE-tip', '$8.00 to $10.00', 'per tip'],
                        ['Planar & Joiner Knives', '$0.70 per inch (steel)', '$1.30 per inch (carbide)'],
                        ['Paper Knives', '$1.20 per inch', ''],
                        ['Wood Bits', '$0.75', '']
                      ]
                    }}
                />

                <div className={s.gallery}>
                    <img src={image10} className={s.img} alt=""/>
                    <img src={image11} className={s.img} alt=""/>
                    <img src={image12} className={s.img} alt=""/>
                    <img src={image13} className={s.img} alt=""/>
                    <img src={image14} className={s.img} alt=""/>
                    <img src={image15} className={s.img} alt=""/>
                    <img src={image16} className={s.img} alt=""/>
                    <img src={image17} className={s.img} alt=""/>
                    <img src={image18} className={s.img} alt=""/>
                </div>
                <div className={s.callUs}>
                    Contact Valley Saw Service in Phoenix, AZ for quality saws and sharpening services. Call <span
                    className={s.bold}>{contactPhone}</span> today!
                </div>
            </div>
        </div>
        <Map/>
    </>
)
