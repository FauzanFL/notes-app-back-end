# Notes API

This API allows you to manage notes. The following endpoints are available:

## POST /notes

Create a new note.

### Request Body

- `title` (string): The title of the note.
- `tags` (array): The tags associated with the note.
- `body` (string): The body of the note.

### Response

- `status` (string): The status of the request.
- `message` (string): A message describing the result of the operation.
- `data.noteId` (string): The ID of the created note.

## GET /notes

Get all notes.

### Response

- `status` (string): The status of the request.
- `data.notes` (array): An array of notes.

## GET /notes/{id}

Get a note by its ID.

### Path Parameters

- `id` (string): The ID of the note.

### Response

- `status` (string): The status of the request.
- `data.note` (object): The requested note.

## PUT /notes/{id}

Update a note by its ID.

### Path Parameters

- `id` (string): The ID of the note.

### Request Body

- `title` (string): The new title of the note.
- `tags` (array): The new tags associated with the note.
- `body` (string): The new body of the note.

### Response

- `status` (string): The status of the request.
- `message` (string): A message describing the result of the operation.

## DELETE /notes/{id}

Delete a note by its ID.

### Path Parameters

- `id` (string): The ID of the note.

### Response

- `status` (string): The status of the request.
- `message` (string): A message describing the result of the operation.
