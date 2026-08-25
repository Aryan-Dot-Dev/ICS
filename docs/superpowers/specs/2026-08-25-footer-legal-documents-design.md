# Footer Legal Documents Design

## Goal

Make the supplied Infou ICS Privacy Policy and Terms & Conditions documents accessible from the website footer.

## Design

- Store both supplied PDFs as static site assets with stable, URL-safe filenames.
- Preserve the existing footer's Legal Framework column and visual treatment.
- Link `Privacy Policy` to the privacy PDF and `Terms & Conditions` to the terms PDF.
- Open each document in a new browser tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Do not add separate application routes or duplicate the legal document content in React.

## Verification

- Confirm both PDFs exist at their public asset paths.
- Run the production build and confirm the static assets are copied into the output.
- Inspect the footer source to confirm both links use the expected URLs and new-tab behavior.
