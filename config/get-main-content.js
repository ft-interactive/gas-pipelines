import structuredGoogleDoc from 'structured-google-docs-client';

module.exports = async (googleDocId) => {
  const contentObject = [];
  const dataObject = {};
  const transform = (contentInput, typeInput, label) => {
    const type = typeInput.trim();

    let content = contentInput.trim();
    if (type === 'text') {
      content = `<p>${contentInput.trim()}</p>`;
    }

    if (type === 'markup') {
      content = `<p>${contentInput
        .trim()
        .replace(/<p>/g, '')
        .replace(/<\/p>/g, '')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, "'")
        .replace(/&#x201C;/g, "'")
        .replace(/&#x201D;/g, "'")}<p>`;
    }

    if (type === 'data') {
      dataObject[label.trim()] = contentInput.trim();
    }

    contentObject.push({
      content,
      type,
      label,
    });
  };

  await structuredGoogleDoc(googleDocId, { transform });

  return {
    contentObject,
    dataObject,
  };
};
