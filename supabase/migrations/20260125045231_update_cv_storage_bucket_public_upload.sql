/*
  # Update CV Storage Bucket - Allow Public Upload

  1. Changes
    - Allow public (unauthenticated) users to upload CV files
    - Allow public users to delete CV files
    - Keep public read access

  2. Security Notes
    - This is for a personal portfolio website
    - The CV upload page is not linked in navigation
    - Access is intended for the portfolio owner only
    - In production, consider adding authentication

  3. Rationale
    - Simplifies CV management for portfolio owner
    - No authentication setup required
    - Upload page is accessed via direct URL only
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can upload CV files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete CV files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update CV files" ON storage.objects;

-- Allow public upload access to CV files
CREATE POLICY "Public can upload CV files"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'cv-files');

-- Allow public delete access to CV files
CREATE POLICY "Public can delete CV files"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'cv-files');

-- Allow public update access to CV files
CREATE POLICY "Public can update CV files"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'cv-files')
WITH CHECK (bucket_id = 'cv-files');
