import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

const Categoria = ({ categoria }) => {
  const { handleClickCategoria, categoriaActual } = useQuiosco();
  
	const { nombre, icono, id } = categoria;
	
	return (
		<div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border hover:bg-amber-400`}>
			<Image
				width={70}
				height={70}
				src={`/assets/img/icono_${icono}.svg`}
				alt='Imagen Icono'
				className='mb-2'
			/>
			<button
				type='button'
				className='text-2xl fond-bold hover:cursor-pointer mb-3'
				onClick={() => handleClickCategoria(id)}
			>
				{nombre}
			</button>
		</div>
	);
};

export default Categoria;
