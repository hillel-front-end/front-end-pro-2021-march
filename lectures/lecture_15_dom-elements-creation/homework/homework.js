const folders = new Array(1000).fill(0).map(function (item, index) {
  return {
    id : index,
    name : 'Folder ' + index,
  }
})

const foldersList = document.querySelector('#folders .section__list ')
const archivedFoldersList = document.querySelector('#archive .section__list ')

folders.forEach(function (item) {
  renderFolder(item, foldersList)
});


function renderFolder(folder, target) {
  const folderDiv = document.createElement('div');
  folderDiv.classList.add('folder');

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('folder__action-button');
  actionsDiv.innerHTML = `
    <span class='folder__action-button-title'>actions</span>
    <div class='folder__actions'>
      <div class='folder__action-item'>Rename</div>
      <div class='folder__action-item'>Delete</div>
      <div class='folder__action-item'>Archive</div>
      <div class='folder__action-item'>Restore</div>
    </div>
  `

  const folderNameText = document.createTextNode(folder.name);

  folderDiv.append(folderNameText);
  folderDiv.append(actionsDiv);

  target.append(folderDiv);
}

function renameFolder(folder) {

}

function deleteFolder(folder) {

}

function moveFolderToArchive(folder) {

}

function restoreFromArchive(folder) {

}
