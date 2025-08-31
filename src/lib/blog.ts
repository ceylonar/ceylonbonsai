
import { db } from './firebase';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import type { BlogPost } from './blog-data';
import { initialBlogPosts } from './blog-data';

const blogCollectionRef = collection(db, 'blog');

export async function getBlogPosts(): Promise<BlogPost[]> {
  const q = query(blogCollectionRef, orderBy('publishedAt', 'desc'));
  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    await seedBlogData();
    const seededSnapshot = await getDocs(q);
    return seededSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
  }
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const docRef = doc(db, 'blog', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as BlogPost;
  }
  return null;
}

export async function addBlogPost(post: Omit<BlogPost, 'id'>): Promise<BlogPost> {
  const docRef = await addDoc(blogCollectionRef, post);
  return { id: docRef.id, ...post };
}

export async function updateBlogPost(id: string, post: Partial<BlogPost>): Promise<void> {
  const docRef = doc(db, 'blog', id);
  await updateDoc(docRef, post);
}

export async function deleteBlogPost(id: string): Promise<void> {
  const docRef = doc(db, 'blog', id);
  await deleteDoc(docRef);
}

export async function seedBlogData() {
  const snapshot = await getDocs(blogCollectionRef);
  if (snapshot.empty) {
    console.log('Seeding blog data...');
    const promises = initialBlogPosts.map(post => addDoc(blogCollectionRef, post));
    await Promise.all(promises);
  }
}
