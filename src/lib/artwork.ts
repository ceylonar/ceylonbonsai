
import { db } from './firebase';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import type { ArtworkItem } from './artwork-data';
import { initialArtworkItems } from './artwork-data';

const artworkCollectionRef = collection(db, 'artwork');

export async function getArtworkItems(): Promise<ArtworkItem[]> {
  const snapshot = await getDocs(artworkCollectionRef);
  if (snapshot.empty) {
    await seedArtworkData();
    const seededSnapshot = await getDocs(artworkCollectionRef);
    return seededSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ArtworkItem));
  }
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ArtworkItem));
}

export async function getArtworkItem(id: string): Promise<ArtworkItem | null> {
  const docRef = doc(db, 'artwork', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as ArtworkItem;
  }
  return null;
}

export async function addArtworkItem(item: Omit<ArtworkItem, 'id'>): Promise<ArtworkItem> {
  const docRef = await addDoc(artworkCollectionRef, item);
  return { id: docRef.id, ...item };
}

export async function updateArtworkItem(id: string, item: Partial<ArtworkItem>): Promise<void> {
  const docRef = doc(db, 'artwork', id);
  await updateDoc(docRef, item);
}

export async function deleteArtworkItem(id: string): Promise<void> {
  const docRef = doc(db, 'artwork', id);
  await deleteDoc(docRef);
}

export async function seedArtworkData() {
  const snapshot = await getDocs(artworkCollectionRef);
  if (snapshot.empty) {
    console.log('Seeding artwork data...');
    const promises = initialArtworkItems.map(item => addDoc(artworkCollectionRef, item));
    await Promise.all(promises);
  }
}
