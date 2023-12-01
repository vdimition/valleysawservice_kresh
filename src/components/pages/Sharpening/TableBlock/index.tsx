import React, { type FC } from 'react'
import s from './index.module.scss'

interface Table {
  th: string[]
  td: string[][]
}

interface Props {
  delimiter?: boolean
  bgGray?: boolean
  title: string
  subTitle?: string
  subTitle2?: string
  columnTitle?: string
  subTitleBottom?: string
  subTitleBottom2?: string
  table: Table
  image?: string
}

export const TableBlock: FC<Props> = ({
  delimiter = false,
  bgGray = false,
  title,
  subTitle,
  subTitle2,
  columnTitle,
  subTitleBottom,
  subTitleBottom2,
  table,
  image
}) => (
    <>
        {delimiter && <div className={s.delimiter}/>}

        <div className={`${s.tableWrapper} ${bgGray ? s.bgGray : ''}`}>
            <div className={s.tableInnerWrapper}>
                {Boolean(title) && <div className={s.title}>{title}</div>}
                {Boolean(subTitle) && <div className={s.subTitle}>{subTitle}</div>}
                {Boolean(subTitle2) && <div className={s.subTitle}>{subTitle2}</div>}
                {Boolean(columnTitle) && <div className={s.columnTitle}>{columnTitle}</div>}
                <table className={s.table}>
                    <tbody>
                    <tr>
                        {table.th.map(th => <th key={th}>{th}</th>)}
                    </tr>
                    {table.td.map(tr => (
                        <tr key={tr.join()}>
                            {tr.map(td => <td key={td}>{td}</td>)}
                        </tr>
                    ))}
                    </tbody>
                </table>
                {Boolean(subTitleBottom) && <div>{subTitleBottom}</div>}
                {Boolean(subTitleBottom2) && <div>{subTitleBottom2}</div>}
            </div>

            {Boolean(image) && <img src={image} className={s.image} alt=""/>}
        </div>
    </>
)
