$(document).ready(function(){

	const formAddWorkEl = $('.js-form-add-work'), 
		newWorkListEl = $('.js-work-list'),
		textNoneWorkEl = $('.js-work-none'),       	
		titleWorkEl = $('.js-title'),            
	 	descriptionWorkEl = $('.js-description'); 

	//добавить дело
	$(formAddWorkEl).on('submit', onFormSubmit);
	
	// удаление дел
	$(newWorkListEl).on('click', '.js-delete', onDeleteBtnClick);

	// свернуть описание дела
	$(newWorkListEl).on('click', '.js-collapse', onCollapseBtnClick);

	//добавить дело
	function onFormSubmit(event) {
		event.preventDefault();   

		const title = titleWorkEl.val(),
			description = descriptionWorkEl.val();

			newWorkListEl.append(`
				<li class="work-li js-work-li">
					<article>
						<header class="head-work clearfix">
							<h3 class="name-work">${title}</h3>

							<button class="delete js-delete" aria-label="Удалить дело"></button> 
							<button class="collapse js-collapse" aria-label="Свернуть описание карточки дела"></button> 
						</header>

						<p class="description-work js-description-work">${description}</p>
					</article>
				</li>
			`);

			textNoneWorkEl.hide(); //скрыть надпись список пуст

			//очищаем поля для ввода
			this.reset();
	}

	// удаление дел
	function onDeleteBtnClick() {
		$(this).closest('.js-work-li').remove();

		if (newWorkListEl.children().length == 0) {
			textNoneWorkEl.show();
		}
	}

	// функция для сворачивания описание дела
	function onCollapseBtnClick(event) { 
		event.preventDefault();

		$(this).closest('.js-work-li').find('.js-description-work').slideToggle(200); 
		$(this).toggleClass('collapse collapse-rotate');

		if ($(this).attr('aria-label') === 'Свернуть описание карточки дела') {
			($(this).attr('aria-label', 'Развернуть описание карточки дела'))
		}
		else 
			($(this).attr('aria-label', 'Свернуть описание карточки дела'))
	}
});