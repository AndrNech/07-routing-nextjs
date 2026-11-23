'use client';

import css from './Modal.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  useEffect(() => {
    const escHandler = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        router.back();
      }
    };

    window.addEventListener('keydown', escHandler);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', escHandler);
      document.body.style.overflow = 'auto';
    };
  }, [router]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      router.back();
    }
  };

  // const modalRoot = document.getElementById('modal-root');

  // if(!modalRoot) {
  //   alert("Couldn't display modal")
  //   return null;
  // }

  return (
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={() => router.back()}>Close</button>
      {children}
      </div>
    </div>
  );
}


// return createPortal(
//   <div
//     className={css.backdrop}
//     role="dialog"
//     aria-modal="true"
//     onClick={handleBackdropClick}
//   >
//     <div className={css.modal}>
//     {children}
//     </div>
//   </div>,
//   modalRoot as HTMLDivElement
// );