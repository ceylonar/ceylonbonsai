
import { db } from './firebase';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import type { ShowcaseItem } from './showcase-data';
import { initialShowcaseItems } from './showcase-data';

const showcaseCollectionRef = collection(db, 'showcase');

export async function getShowcaseItems(): Promise<ShowcaseItem[]> {
  const snapshot = await getDocs(showcaseCollectionRef);
  if (snapshot.empty) {
    await seedShowcaseData();
    const seededSnapshot = await getDocs(showcaseCollectionRef);
    return seededSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ShowcaseItem));
  }
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ShowcaseItem));
}

export async function getShowcaseItem(id: string): Promise<ShowcaseItem | null> {
  const docRef = doc(db, 'showcase', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as ShowcaseItem;
  }
  return null;
}

export async function addShowcaseItem(item: Omit<ShowcaseItem, 'id'>): Promise<ShowcaseItem> {
  const docRef = await addDoc(showcaseCollectionRef, item);
  return { id: docRef.id, ...item };
}

export async function updateShowcaseItem(id: string, item: Partial<ShowcaseItem>): Promise<void> {
  const docRef = doc(db, 'showcase', id);
  await updateDoc(docRef, item);
}

export async function deleteShowcaseItem(id: string): Promise<void> {
  const docRef = doc(db, 'showcase', id);
  await deleteDoc(docRef);
}

export async function seedShowcaseData() {
  const snapshot = await getDocs(showcaseCollectionRef);
  if (snapshot.empty) {
    console.log('Seeding showcase data...');
    const promises = initialShowcaseItems.map(item => addDoc(showcaseCollectionRef, item));
    await Promise.all(promises);
  }
}
