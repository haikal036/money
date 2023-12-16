function generatepdf() {
    document.getElementById('generate-pdf').addEventListener('click', () => {
        // Create a new jsPDF instance
        const pdf = new jsPDF();
    
        // Add content to the PDF
        pdf.text('Hello, this is a sample PDF!', 10, 10);
    
        // Save the PDF with a specific name
        pdf.save('sample.pdf');
      });
}