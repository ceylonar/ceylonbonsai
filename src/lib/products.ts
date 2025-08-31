import { db } from './firebase';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import type { Product } from './product-data';
import { initialProducts } from './product-data';

const productsCollectionRef = collection(db, 'products');

export async function getProducts(): Promise<Product[]> {
  const snapshot = await getDocs(productsCollectionRef);
   if (snapshot.empty) {
    // Seed the database if it's empty
    await seedProductsData();
    const seededSnapshot = await getDocs(productsCollectionRef);
    return seededSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  }
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
}

export async function getProduct(id: string): Promise<Product | null> {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Product;
  }
  return null;
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<Product> {
  const docRef = await addDoc(productsCollectionRef, product);
  return { id: docRef.id, ...product };
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<void> {
  const docRef = doc(db, 'products', id);
  await updateDoc(docRef, product);
}

export async function deleteProduct(id: string): Promise<void> {
  const docRef = doc(db, 'products', id);
  await deleteDoc(docRef);
}

export async function seedProductsData() {
    const snapshot = await getDocs(productsCollectionRef);
    if(snapshot.empty) {
        console.log('Seeding products data...');
        const promises = initialProducts.map(product => addDoc(productsCollectionRef, product));
        await Promise.all(promises);
    }
}
