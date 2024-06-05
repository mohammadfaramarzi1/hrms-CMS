const showData = (data, designation, container) => {
  container.innerHTML = "";
  const mainData = data.filter(
    (employee) => employee.designation === designation
  );
  mainData.forEach((item) => {
    container.innerHTML += `
            <tr>
              <td>
                <img src="${item.img}" />
                <h4>${item.name}</h4>
              </td>
              <td>
                <h4>${item.id}</h4>
              </td>
              <td>
                <h4>${item.designation}</h4>
              </td>
              <td>
                <h4>${item.type}</h4>
              </td>
              <td>
                <h4 class="${item.class}">${item.status}</h4>
              </td>
            </tr>
          `;
  });
};

export default showData;