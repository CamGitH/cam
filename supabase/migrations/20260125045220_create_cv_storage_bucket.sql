/*
  # Create CV Storage Bucket

  1. Storage Setup
    - Create a public storage bucket called 'cv-files' for storing CV PDFs
    - Enable public access for reading files (anyone can download)
    - Restrict upload/delete to authenticated users only

  2. Security
    - Public read access (anyone can view/download CVs)
    - Authenticated write access (only logged-in users can upload/delete)
    - Files are served with proper MIME types

  3. Notes
    - This bucket will store CV PDF files
    - Latest uploaded CV will be displayed on the portfolio
    - Old CV files will remain in storage but won't be displayed
*/

-- Create the storage bucket for CV files
INSERT INTO storage.buckets (id, name, public)
VALUES ('cv-files', 'cv-files', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public read access for CV files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload CV files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete CV files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update CV files" ON storage.objects;

-- Allow public read access to CV files
CREATE POLICY "Public read access for CV files"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'cv-files');

-- Allow authenticated users to upload CV files
CREATE POLICY "Authenticated users can upload CV files"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'cv-files');

-- Allow authenticated users to delete CV files
CREATE POLICY "Authenticated users can delete CV files"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'cv-files');

-- Allow authenticated users to update CV files
CREATE POLICY "Authenticated users can update CV files"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'cv-files')
WITH CHECK (bucket_id = 'cv-files');
