import { db } from './firebase';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import type { MuseumItem } from './museum-data';
import { initialBonsaiGallery } from './museum-data';

const museumCollectionRef = collection(db, 'museum');

export async function getMuseumItems(): Promise<MuseumItem[]> {
  const snapshot = await getDocs(museumCollectionRef);
  if (snapshot.empty) {
    // Seed the database if it's empty
    await seedMuseumData();
    const seededSnapshot = await getDocs(museumCollectionRef);
    return seededSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MuseumItem));
  }
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MuseumItem));
}

export async function getMuseumItem(id: string): Promise<MuseumItem | null> {
  const docRef = doc(db, 'museum', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as MuseumItem;
  }
  return null;
}

export async function addMuseumItem(item: Omit<MuseumItem, 'id'>): Promise<MuseumItem> {
  const docRef = await addDoc(museumCollectionRef, item);
  return { id: docRef.id, ...item };
}

export async function updateMuseumItem(id: string, item: Partial<MuseumItem>): Promise<void> {
  const docRef = doc(db, 'museum', id);
  await updateDoc(docRef, item);
}

export async function deleteMuseumItem(id: string): Promise<void> {
  const docRef = doc(db, 'museum', id);
  await deleteDoc(docRef);
}

export async function seedMuseumData() {
  const snapshot = await getDocs(museumCollectionRef);
  if (snapshot.empty) {
    console.log('Seeding museum data...');
    const promises = initialBonsaiGallery.map(item => addDoc(museumCollectionRef, item));
    await Promise.all(promises);
  }
}
