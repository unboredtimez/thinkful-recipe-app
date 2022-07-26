import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // Setting the default state of my form as blank values
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // Declaring my formData as a state using the initialFormState
  const [formData, setFormData] = useState({ ...initialFormState });

  // Declaring my handleChange function to update my formData any time there's a change in the forms
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // Declaring my handleSubmit function to properly update my Recipe list once the Submit button it pressed.
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td className="content_td">
              <p>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients"
                  required={true}
                  rows={2}
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </p>
            </td>
            <td className="content_td">
              <p>
                <textarea
                  id="preparation"
                  name="preparation"
                  placeholder="Preparation"
                  required={true}
                  rows={2}
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </p>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
