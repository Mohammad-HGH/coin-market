import UseImg from './UseImg'

import Typography from './Typography' // simple plain-text react component

interface MyInputLayout {
    fileName: string;
    alt: string;
    className: string;
}

const Importer = ({ fileName, alt, className, ...rest }: MyInputLayout) => {
    const { loading, error, image } = UseImg(fileName)
    if (error) return <Typography>{alt}</Typography>

    return (
        <>
            {loading ? (
                <Typography>loading</Typography>
            ) : (
                <img
                    className={`Image${className
                        ? className.padStart(className.length + 1)
                        : ''
                        }`}
                    src={image}
                    alt={alt}
                    {...rest}
                />
            )}
        </>
    )
}

export default Importer