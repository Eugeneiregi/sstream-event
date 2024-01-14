'use client'

import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useTransition } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { deleteEvent } from '@/lib/actions/event.actions';

export const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      await deleteEvent({ eventId, path: pathname });
    });
  };

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading className="font-bold">Are you sure you want to delete?</Alert.Heading>
        <p>This will permanently delete this event.</p>
        <hr />
        <div className="d-flex justify-content-end p-2">
          <Button onClick={() => setShow(false)}
           variant="outline-success"
           className="mr-2 bg-yellow-500 hover:bg-blue-600 text-white rounded-full p-2">
            Cancel
          </Button>
          <Button onClick={handleDelete}
           variant="danger"
           className="bg-red-600 p-2 hover:bg-black rounded-full text-center text-white">
            {isPending ? 'Deleting...' : 'Delete'}
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button onClick={() => setShow(true)}>
          <Image src="/assets/icons/delete.svg" alt="edit" width={20} height={20} />
        </Button>
      )}
    </>
  );
};