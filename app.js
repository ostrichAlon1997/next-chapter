const container = document.querySelector('#cards');
for (const entry of entries) {
  const card = document.createElement('article');
  const title = document.createElement('h2');
  title.textContent = entry.title;
  const detail = document.createElement('p');
  detail.textContent = entry.detail;
  card.append(title, detail);
  container.append(card);
}
