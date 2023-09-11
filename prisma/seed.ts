import { categorias } from './data/categorias';
import { productos } from './data/productos';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
	try {
		await prisma.Categoria.createMany({
			data: categorias,
		});
		await prisma.Producto.createMany({
			data: productos,
		});
	} catch (error) {
		console.log(error);
	}
};
main();
