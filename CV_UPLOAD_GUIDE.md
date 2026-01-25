# CV Upload Guide

## Overview

Your portfolio now includes CV upload and download functionality. Visitors can download your CV from the Experience section, and you can easily upload/update your CV file.

## Features Added

### 1. CV Menu Item
- Added "CV" link to the navigation menu
- Clicking it scrolls to the Work & Experience section
- Available in both desktop and mobile navigation

### 2. Download CV Button
- Located in the Experience section, just below the subtitle
- Visible only when a CV file has been uploaded
- Features a clean, gradient design with download icon
- Shows "Downloading..." status during download

### 3. CV Upload Page
- Dedicated admin page for uploading CV files
- Simple drag-and-drop interface
- Only accepts PDF files
- Shows file size and upload status

## How to Upload Your CV

### Step 1: Access the Upload Page

Simply add `#cv-upload` to your website URL:

**In Development:**
```
http://localhost:5173/#cv-upload
```

**In Production:**
```
https://yourdomain.com/#cv-upload
```

The page will automatically load the CV upload interface.

### Step 2: Upload Your CV

1. Click on the upload area or "Click to select PDF file"
2. Select your CV PDF file from your computer
3. The file information will be displayed
4. Click "Upload CV" button
5. Wait for the success message

### Step 3: Verify

1. Navigate back to your portfolio home page
2. Scroll to the "Work & Experience" section
3. You should see the "Download CV" button
4. Click it to test the download

## Technical Details

- **Storage:** CV files are stored in Supabase Storage bucket `cv-files`
- **Format:** Only PDF files are accepted
- **Access:** The upload page is not linked in navigation for security
- **Public Access:** The download button is public, but upload page requires direct URL access
- **Multiple Uploads:** Each upload creates a new file; the latest one is displayed

## Security Considerations

- The upload page is intentionally not linked in the main navigation
- Consider implementing authentication for production use
- The upload page URL should be kept private
- Only PDF files are accepted to prevent malicious uploads

## Troubleshooting

### CV button not showing
- Make sure you've uploaded a CV file successfully
- Check browser console for any errors
- Verify Supabase storage bucket is set up correctly

### Upload fails
- Ensure the file is a valid PDF
- Check file size (keep it under 5MB for best performance)
- Verify internet connection
- Check browser console for detailed error messages

### Download not working
- Verify the CV was uploaded successfully
- Check browser's download settings
- Try a different browser if issues persist

## Future Enhancements

Consider adding:
- Authentication system for secure uploads
- Multiple language CV support
- CV preview before download
- Upload history and management
- File size optimization
