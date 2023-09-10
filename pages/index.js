import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";
export default function Home() {
	const {categoriaActual}=useQuiosco()


	return (
		<Layout pagina={`Menú ${categoriaActual?.nombre}`}>
			<h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
			<p className="text-2xl my-10">
				Elige y personaliza tu pedido a continuación
			</p>
			<div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{categoriaActual?.productos?.map(producto => (
				<Producto 
					key={producto.id}
					producto={producto}
				/>
			))}
		</div>
		</Layout>
	)

}

// Las consultas a la base de datos solo se pueden ejecutar desde
// esta funcion en el servidor (getServerSideProps) o desde la api
// y se recibe la informacion por props en Home de la siguiente manera
// export default function Home({ categorias }) {
//	
// export async function getServerSideProps() {
// 	const prisma = new PrismaClient();
// 	const categorias = await prisma.categoria.findMany();
// 	//console.log(categorias);

// 	return {
// 		props: { categorias },
// 	};
// }
